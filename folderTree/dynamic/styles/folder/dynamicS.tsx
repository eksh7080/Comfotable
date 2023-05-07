import styled from '@emotion/styled';

export const Container = styled.section`
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

            &:hover {
              background: rgba(205, 209, 228);
              border-radius: 0.6rem;
              cursor: pointer;
            }

            li:first-of-type {
              display: flex;
              flex-direction: row;
              align-items: center;
              padding-left: 4.8rem;
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
                      padding-left: 10.4rem;
                    }
                  }

                  .fourDepthWrap {
                    .fourList {
                      display: flex;
                      min-height: 4rem;
                      padding: 0.8rem 1.6rem;
                      max-width: 100%;
                      width: 100%;

                      &:hover {
                        background: rgba(205, 209, 228);
                        border-radius: 0.6rem;
                        cursor: pointer;
                      }

                      li:first-of-type {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        padding-left: 12.8rem;
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

                    .fourListFacebook {
                      display: flex;
                      min-height: 4rem;
                      padding: 0.8rem 1.6rem;
                      max-width: 100%;
                      width: 100%;

                      &:hover {
                        background: rgba(205, 209, 228);
                        border-radius: 0.6rem;
                        cursor: pointer;
                      }

                      li:first-of-type {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        padding-left: 12.8rem;
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

                    .fiveDepthWrap {
                      .fiveListFacebook {
                        display: flex;
                        min-height: 4rem;
                        padding: 0.8rem 1.6rem;
                        max-width: 100%;
                        width: 100%;

                        &:hover {
                          background: rgba(205, 209, 228);
                          border-radius: 0.6rem;
                          cursor: pointer;
                        }

                        li:first-of-type {
                          display: flex;
                          flex-direction: row;
                          align-items: center;
                          padding-left: 14.8rem;
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
