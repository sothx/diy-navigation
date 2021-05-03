import React, { useState, useEffect } from 'react';
import styles from './index.less';
import {
  Input,
  Card,
  message,
  Menu,
  Dropdown,
  Typography,
  Image,
  Avatar,
  Tag,
} from 'antd';

import { MainContainer, WebsiteCardList, CandidateWordCardList } from './style';

import { GoogleOutlined, SearchOutlined } from '@ant-design/icons';

import IconFont from '@/components/IconFont';

import { globalSetting } from '../config/navigation.config';

import { websiteList } from '../config/website.config';

const { searchEngine, searchWebsite, name: websiteName } = globalSetting;

const { Meta } = Card;

const { Search } = Input;

const { Text, Link, Title } = Typography;

const onSearch = (value) => console.log(value);

const index = () => {
  const [defaultSelectedKeys, setDefaultSelectedKeys]: any = useState([]);

  useEffect(() => {
    const _currentSearchEngineKey = localStorage.getItem('currentSearchEngine');
    if (_currentSearchEngineKey) {
      const _arr = [_currentSearchEngineKey];
      setDefaultSelectedKeys(_arr);
      const _currentSearchEngineData = searchEngine?.filter((v, i, a) => {
        return v.key === _currentSearchEngineKey;
      });
      if (_currentSearchEngineData && _currentSearchEngineData.length) {
        setCurrentSearchEngine(_currentSearchEngineData[0]);
      }
    }
  }, []);

  const menu = (
    <Menu className="searchMenu" defaultSelectedKeys={defaultSelectedKeys}>
      {searchEngine?.map((v, i, a) => {
        return (
          <Menu.Item
            onClick={() => {
              handleSearchEngineSelect(v);
            }}
            key={i}
          >
            {v.icon ? v.icon() : null}
            {v.name}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  const [currentSearchEngine, setCurrentSearchEngine] = useState(
    (searchEngine as any)[0] || undefined,
  );

  const [searchValue, setSearchValue] = useState('');

  const [candidateWord, setCandidateWord] = useState([]);

  const [filterWebsiteList, setFilterWebsiteList] = useState(websiteList);

  useEffect(() => {
    if (searchWebsite) {
      setFilterWebsiteList(
        websiteList.filter((v, i, a) => {
          return v.name.indexOf(searchValue) > -1;
        }),
      );
    }
  }, [websiteList, searchValue]);

  const handleKeyDownEnter = (e: any) => {
    if (e && e.keyCode === 13) {
      handleSearch();
    }
  };

  const handleSearch = (value?: string) => {
    let _searchUrl = currentSearchEngine.searchUrl(searchValue);
    if (value) {
      _searchUrl = currentSearchEngine.searchUrl(value);
    }
    window.open(_searchUrl);
  };

  const handleSearchEngineSelect = (item: any) => {
    localStorage.setItem('currentSearchEngine', item.key);
    let _key = item.key;
    let _arr = [_key];
    setDefaultSelectedKeys(_arr);
    setCurrentSearchEngine(item);
  };

  const handleSearchValueChange = async (e: Input) => {
    setSearchValue(e.target.value);
    if (e.target.value) {
      const _CandidateWord = await currentSearchEngine.searchCandidateWord(
        e.target.value,
      );
      setCandidateWord(_CandidateWord || []);
    } else {
      setCandidateWord([]);
    }
  };

  const handleClickCandidateWord = (value: string) => {
    handleSearch(value);
  };

  return (
    <>
      <MainContainer onKeyDown={(e: any) => handleKeyDownEnter(e)}>
        <Input
          placeholder=""
          allowClear
          className="serachInput"
          addonAfter={false}
          value={searchValue}
          onChange={(e: Input) => handleSearchValueChange(e)}
          prefix={
            <Dropdown placement="bottomCenter" overlay={menu}>
              {currentSearchEngine.icon()}
            </Dropdown>
          }
          suffix={
            <SearchOutlined
              onClick={() => handleSearch()}
              style={{ fontSize: '22px', color: '#7e7e7e', cursor: 'pointer' }}
            />
          }
          size="large"
        />
        <CandidateWordCardList>
          {candidateWord.map((v, i, a) => {
            return (
              <div
                onClick={() => handleClickCandidateWord(v)}
                key={i}
                className={`card-item`}
              >
                {v}
              </div>
            );
          })}
        </CandidateWordCardList>
        <WebsiteCardList>
          {filterWebsiteList.map((v, i, a) => {
            return (
              <div
                key={i}
                onClick={() => {
                  window.open(v.href);
                }}
                className={`card-item`}
              >
                <Avatar
                  size={40}
                  className={`item-img ${v.objectFit ? v.objectFit : 'cover'}`}
                  src={v.icon}
                />
                <Text className="item-text">{v.name}</Text>
              </div>
            );
          })}
        </WebsiteCardList>
      </MainContainer>
    </>
  );
};

index.title = '简洁导航';
export default index;
