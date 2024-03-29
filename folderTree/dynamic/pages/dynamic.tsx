import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ListAll, ListItemAll, ListTreeChildItems, ListTreeItems } from 'types/list';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Container, Footer, Header } from 'styles/folder/dynamicS';
import FolderTree from 'components/FolderTree';
import ListAllItems from 'db/listAll.json';
import CAKE from '../public/images/dessert/cake.png';
import FileTree from 'components/FileTree';

const Dynamic = () => {
  const router = useRouter();
  const [listItems, setListItems] = useState<ListTreeItems[]>([]);
  const [isToggle, setIsToggle] = useState(false);
  const [rootToggleStatus, setRootToggleStatus] = useState<{ number: boolean }>({ 0: false });
  const [oneToggleStatus, setOneToggleStatus] = useState({});
  const [twoToggleStatus, setTwoToggleStatus] = useState({});
  const [chkStatus, setChkStatus] = useState(false);

  const { isFetching: listFetching } = useQuery<ListItemAll>(['list'], async () => (await axios.get(`/api/list`)).data, {
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess(item) {
      setListItems([...item.folder, ...item.file]);

      console.log(item.file, 'item', item);
    },
  });

  const onChangeBox = (e: React.ChangeEvent<HTMLDivElement>) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setChkStatus(true);
    } else {
      setChkStatus(false);
    }
  };

  console.log(listItems, '리스트 아이템');
  console.log(rootToggleStatus, ' 토글 스테이터스 ', oneToggleStatus);

  return (
    <Container>
      <Header>
        <h1 onClick={() => router.back()}>뒤로 가기</h1>
      </Header>

      <section className="areaBox">
        <strong>영역</strong>
      </section>

      <section className="interaction">
        <article className="interArea">인터렉션 탑</article>
        <div>
          <ul className="listWrap">
            {!listFetching &&
              listItems.map((rootItem: ListTreeItems, rootIndex) => (
                <li key={rootIndex}>
                  {rootItem.isfolder === 'Y' ? (
                    <>
                      <ul
                        className="rootList"
                        onClick={() => {
                          setRootToggleStatus((prevState) => ({
                            ...prevState,
                            [rootIndex]: !prevState[rootIndex],
                          }));
                        }}
                      >
                        <li>
                          <div className="utilWrap">
                            <div className="arrowWrap">
                              {rootToggleStatus[rootIndex] ? (
                                <Image src="/images/arrow/arrow_drop_down.svg" alt="arrow" priority width={24} height={24} />
                              ) : (
                                <Image src="/images/arrow/arrow_drop_up.svg" alt="arrow" priority width={24} height={24} />
                              )}
                            </div>
                            <div>
                              <Image src="/images/folder/dessert.png" alt="GroupFolder" priority width={24} height={24} />
                            </div>
                          </div>
                          <div className="displayInfo">
                            <article>
                              <input type="checkbox" name="checkBox" id="root" onChange={(e) => onChangeBox(e)} />
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
                      {rootToggleStatus[rootIndex] && (
                        <ul className="oneDepthWrap">
                          {rootItem.file.map((oneItem, oneIndex) => (
                            <li key={oneIndex}>
                              <ul
                                className="oneList"
                                onClick={() => {
                                  setOneToggleStatus((prevState) => ({
                                    ...prevState,
                                    [`${rootIndex}-${oneIndex}`]: !prevState[`${rootIndex}-${oneIndex}`],
                                  }));
                                }}
                              >
                                <li>
                                  <div className="utilWrap">
                                    <div className="arrowWrap">
                                      {oneToggleStatus[`${rootIndex}-${oneIndex}`] ? (
                                        <Image src="/images/arrow/arrow_drop_down.svg" alt="arrow" priority width={24} height={24} />
                                      ) : (
                                        <Image src="/images/arrow/arrow_drop_up.svg" alt="arrow" priority width={24} height={24} />
                                      )}
                                    </div>
                                    <div className="channelSymbol">
                                      <span className={`setting ${oneItem.type}`}></span>
                                    </div>
                                  </div>
                                  <div className="displayInfo">
                                    <article>
                                      <input type="checkbox" name="checkBox" id="one" readOnly />
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
                              {oneToggleStatus[`${rootIndex}-${oneIndex}`] && (
                                <ul className="twoDepthWrap">
                                  {oneItem.child?.map((twoItem, twoIndex) => (
                                    <li key={twoIndex}>
                                      <ul
                                        className="twoList"
                                        onClick={() => {
                                          setTwoToggleStatus((prevState) => ({
                                            ...prevState,
                                            [`${rootIndex}-${oneIndex}-${twoIndex}`]: !prevState[`${rootIndex}-${oneIndex}-${twoIndex}`],
                                          }));
                                        }}
                                      >
                                        <li>
                                          <div className="utilWrap">
                                            <div className="arrowWrap">
                                              {twoToggleStatus[`${rootIndex}-${oneIndex}-${twoIndex}`] ? (
                                                <Image
                                                  src="/images/arrow/arrow_drop_down.svg"
                                                  alt="arrow"
                                                  priority
                                                  width={24}
                                                  height={24}
                                                />
                                              ) : (
                                                <Image src="/images/arrow/arrow_drop_up.svg" alt="arrow" priority width={24} height={24} />
                                              )}
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
                                      <FolderTree
                                        oneItem={oneItem}
                                        twoItem={twoItem}
                                        rootIndex={rootIndex}
                                        oneIndex={oneIndex}
                                        twoIndex={twoIndex}
                                        twoToggleStatus={twoToggleStatus}
                                      />
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <>
                      <ul
                        className="rootList"
                        onClick={() => {
                          setRootToggleStatus((prevState) => ({
                            ...prevState,
                            [rootIndex]: !prevState[rootIndex],
                          }));
                        }}
                      >
                        <li>
                          <div className="utilWrap">
                            <div className="arrowWrap">
                              {rootToggleStatus[rootIndex] ? (
                                <Image src="/images/arrow/arrow_drop_down.svg" alt="arrow" priority width={24} height={24} />
                              ) : (
                                <Image src="/images/arrow/arrow_drop_up.svg" alt="arrow" priority width={24} height={24} />
                              )}
                            </div>
                            <div className="channelSymbol">
                              <span className={`setting ${rootItem.type}`}></span>
                            </div>
                          </div>
                          <div className="displayInfo">
                            <article>
                              <input type="checkbox" name="checkBox" id="root" onChange={(e) => onChangeBox(e)} />
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
                      <FileTree
                        rootItem={rootItem}
                        rootIndex={rootIndex}
                        rootToggleStatus={rootToggleStatus}
                        oneToggleStatus={oneToggleStatus}
                      />
                    </>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </section>

      <Footer>인터렉션-바텀</Footer>
    </Container>
  );
};

export default Dynamic;
