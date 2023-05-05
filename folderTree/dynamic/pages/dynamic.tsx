import styled from '@emotion/styled';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ListAll, ListItemAll, ListTreeItems } from 'types/list';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Container = styled.section`
  max-width: 100%;

  & h1 {
    cursor: pointer;
  }

  input[type='checkbox'] {
    cursor: pointer;
  }

  & .listWrap {
    padding-left: 2rem;
    padding-top: 2rem;
    font-size: 1.4rem;
    & li {
      .rootList {
        display: flex;
        min-height: 4rem;
        padding: 0.8rem 1.6rem;
        max-width: 100%;
        width: 100%;
        justify-content: center;

        &:hover {
          background: rgba(205, 209, 228);
          border-radius: 0.6rem;
          cursor: pointer;
        }

        & li:first-of-type {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;

          .utilWrap {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.4rem;

            .arrowWrap {
              width: 2.4rem;
              height: 2.4rem;
              border-radius: 0.6rem;
            }
          }

          & .displayInfo {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.4rem;

            & .channelSymbol {
              width: 2.4rem;
              height: 2.4rem;
            }
          }
        }

        & li:last-of-type {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
      }

      & .oneDepthWrap {
        li {
          .oneList {
            display: flex;
            min-height: 4rem;
            max-width: 100%;
            width: 100%;
            padding: 0.8rem 1.6rem;
            justify-content: center;

            &:hover {
              background: rgba(205, 209, 228);
              border-radius: 0.6rem;
              cursor: pointer;
            }

            li:first-of-type {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 1rem;

              .utilWrap {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 0.4rem;

                .arrowWrap {
                  width: 2.4rem;
                  height: 2.4rem;
                  border-radius: 0.6rem;
                }

                .channelSymbol {
                  width: 2.4rem;
                  height: 2.4rem;
                }
              }

              .displayInfo {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 0.4rem;
              }
            }

            li:last-of-type {
              display: flex;
              align-items: center;
              gap: 1rem;
            }
          }

          & .twoDepthWrap {
            li {
              .twoList {
                display: flex;
                min-height: 4rem;
                padding: 0.8rem 1.6rem;
                max-width: 100%;
                width: 100%;
                justify-content: center;

                &:hover {
                  background: rgba(205, 209, 228);
                  border-radius: 0.6rem;
                  cursor: pointer;
                }

                li:first-of-type {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  padding-left: 7.6rem;
                  gap: 1rem;

                  .utilWrap {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 0.4rem;

                    .arrowWrap {
                      width: 2.4rem;
                      height: 2.4rem;
                      border-radius: 0.6rem;
                    }
                  }

                  .displayInfo {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 0.4rem;
                  }

                  .channelSymbol {
                    .tag {
                      font-weight: 600;
                      padding: 0.8rem 1.6rem;
                      border-radius: 0.6rem;
                      border: 1px solid #87cefa;
                    }
                  }
                }

                li:last-of-type {
                  display: flex;
                  align-items: center;
                  gap: 1rem;
                }
              }

              .threeDepthWrap {
                li {
                  .threeList {
                    display: flex;
                    min-height: 4rem;
                    padding: 0.8rem 1.6rem;
                    max-width: 100%;
                    width: 100%;
                    justify-content: center;

                    &:hover {
                      background: rgba(205, 209, 228);
                      border-radius: 0.6rem;
                      cursor: pointer;
                    }

                    li:first-of-type {
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      padding-left: 10.4rem;
                      gap: 1rem;

                      .utilWrap {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 0.4rem;

                        .arrowWrap {
                          width: 2.4rem;
                          height: 2.4rem;
                          border-radius: 0.6rem;
                        }
                      }

                      .displayInfo {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 0.4rem;
                      }

                      .channelSymbol {
                        .tag {
                          font-weight: 600;
                          padding: 0.8rem 1.6rem;
                          border-radius: 0.6rem;
                          border: 1px solid #87cefa;
                        }
                      }
                    }

                    li:last-of-type {
                      display: flex;
                      align-items: center;
                      gap: 1rem;
                    }
                  }

                  .threeListFacebook {
                    li:first-of-type {
                      padding-left: 14.4rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Dynamic = () => {
  const router = useRouter();
  const [listItems, setListItems] = useState<ListItemAll[]>([]);

  const { isFetching: listFetching } = useQuery<ListItemAll>(['list'], async () => (await axios.get(`/api/list`)).data, {
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess(item) {
      setListItems([...item.file, ...item.folder]);

      console.log(item.file, 'item', item);
    },
  });

  console.log(listItems, '리스트 아이템');

  return (
    <Container>
      <h1 onClick={() => router.back()}>뒤로 가기</h1>
      <ul className="listWrap">
        {!listFetching &&
          listItems.map((rootItem: ListTreeItems, rootIndex) => (
            <li key={rootIndex}>
              {rootItem.isfolder === 'Y' ? (
                <>
                  <ul className="rootList">
                    <li>
                      <div className="utilWrap">
                        <div className="arrowWrap">
                          <Image src="/images/arrow/arrow_drop_up.svg" alt="arrow" priority width={24} height={24} />
                        </div>
                        <div>
                          <Image src="/images/folder/folder.svg" alt="GroupFolder" priority width={24} height={24} />
                        </div>
                      </div>
                      <div className="displayInfo">
                        <article>
                          <input type="checkbox" name="checkBox" id="root" />
                          <label htmlFor="root"></label>
                        </article>
                        <strong>{rootItem.title}</strong>
                      </div>
                    </li>
                    <li>
                      <article>{rootItem.udate}</article>
                      <article>{rootItem.author}</article>
                      <article>{rootItem.cdate}</article>
                      <article>{rootItem.volume}</article>
                    </li>
                  </ul>
                  <ul className="oneDepthWrap">
                    {rootItem.file.map((oneItem, oneIndex) => (
                      <li key={oneIndex}>
                        <ul className="oneList">
                          <li>
                            <div className="utilWrap">
                              <div className="arrowWrap">
                                <Image src="/images/arrow/arrow_drop_up.svg" alt="arrow" priority width={24} height={24} />
                              </div>
                              <div className="channelSymbol">
                                <span className={`setting ${oneItem.type}`}></span>
                              </div>
                            </div>
                            <div className="displayInfo">
                              <article>
                                <input type="checkbox" name="checkBox" id="one" />
                                <label htmlFor="one"></label>
                              </article>
                              <strong>{oneItem.title}</strong>
                            </div>
                          </li>
                          <li>
                            <article>{oneItem.udate}</article>
                            <article>{oneItem.author}</article>
                            <article>{oneItem.cdate}</article>
                            <article>{oneItem.volume}</article>
                          </li>
                        </ul>
                        <ul className="twoDepthWrap">
                          {oneItem.child?.map((twoItem, twoIndex) => (
                            <li key={twoIndex}>
                              <ul className="twoList">
                                <li>
                                  <div className="utilWrap">
                                    <div className="arrowWrap">
                                      <Image src="/images/arrow/arrow_drop_up.svg" alt="arrow" priority width={24} height={24} />
                                    </div>
                                    <div>
                                      <input type="checkbox" name="checkBox" id="two" />
                                      <label htmlFor="two"></label>
                                    </div>
                                  </div>
                                  <div className="displayInfo">
                                    <div className="channelSymbol">
                                      <p className="tag">{twoItem.category}</p>
                                    </div>
                                    <strong>{twoItem.name}</strong>
                                  </div>
                                </li>
                                <li>
                                  <article>{oneItem.udate}</article>
                                  <article>{oneItem.author}</article>
                                  <article>{oneItem.cdate}</article>
                                  <article>{twoItem.volume}</article>
                                </li>
                              </ul>
                              <ul className="threeDepthWrap">
                                {oneItem.type === 'NAVER_SEARCH_AD'
                                  ? twoItem.child?.map((threeItem, threeIndex) => (
                                      <li key={threeIndex}>
                                        <ul className="threeList">
                                          <li>
                                            <div className="utilWrap">
                                              <div className="arrowWrap">
                                                <Image src="/images/arrow/arrow_drop_up.svg" alt="arrow" priority width={24} height={24} />
                                              </div>
                                              <div>
                                                <input type="checkbox" name="checkBox" id="two" />
                                                <label htmlFor="two"></label>
                                              </div>
                                            </div>
                                            <div className="displayInfo">
                                              <div className="channelSymbol">
                                                <p className="tag">{threeItem.category}</p>
                                              </div>
                                              <strong>{threeItem.name}</strong>
                                            </div>
                                          </li>
                                          <li>
                                            <article>{oneItem.udate}</article>
                                            <article>{oneItem.author}</article>
                                            <article>{oneItem.cdate}</article>
                                            <article>{threeItem.volume}</article>
                                          </li>
                                        </ul>
                                        <div classNAme="fourDepthWrap">
                                          {threeItem.child?.map((fourItem, fourIndex) => (
                                            <ul key={fourIndex}>
                                              <li>
                                                <div className="utilWrap">
                                                  <div className="arrowWrap">
                                                    <Image
                                                      src="/images/arrow/arrow_drop_up.svg"
                                                      alt="arrow"
                                                      priority
                                                      width={24}
                                                      height={24}
                                                    />
                                                  </div>
                                                  <div>
                                                    <input type="checkbox" name="checkBox" id="two" />
                                                    <label htmlFor="two"></label>
                                                  </div>
                                                </div>
                                                <div className="displayInfo">
                                                  <div className="channelSymbol">
                                                    <p className="tag">{fourItem.category}</p>
                                                  </div>
                                                  <strong>{fourItem.name}</strong>
                                                </div>
                                              </li>
                                              <li>
                                                <article>{oneItem.udate}</article>
                                                <article>{oneItem.author}</article>
                                                <article>{oneItem.cdate}</article>
                                                <article>{fourItem.volume}</article>
                                              </li>
                                            </ul>
                                          ))}
                                        </div>
                                      </li>
                                    ))
                                  : twoItem.child?.map((threeItem, threeIndex) => (
                                      <li key={threeIndex}>
                                        <ul className="threeListFacebook threeList">
                                          <li>
                                            <div className="utilWrap">
                                              <div className="arrowWrap">
                                                <Image src="/images/arrow/arrow_drop_up.svg" alt="arrow" priority width={24} height={24} />
                                              </div>
                                              <div>
                                                <input type="checkbox" name="checkBox" id="two" />
                                                <label htmlFor="two"></label>
                                              </div>
                                            </div>
                                            <div className="displayInfo">
                                              <div className="channelSymbol">
                                                <p className="tag">{threeItem.category}</p>
                                              </div>
                                              <strong>{threeItem.name}</strong>
                                            </div>
                                          </li>
                                          <li>
                                            <article>{oneItem.udate}</article>
                                            <article>{oneItem.author}</article>
                                            <article>{oneItem.cdate}</article>
                                            <article>{threeItem.volume}</article>
                                          </li>
                                        </ul>
                                      </li>
                                    ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <></>
              )}
            </li>
          ))}
      </ul>
    </Container>
  );
};

export default Dynamic;
