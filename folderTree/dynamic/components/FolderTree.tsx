import { ListTreeChildItems, ListTreeItems } from 'types/list';
import Image from 'next/image';
import { SetStateAction, useState } from 'react';

interface TreeProps {
  oneItem: ListTreeItems[];
  twoItem: ListTreeChildItems[];
  rootIndex: number;
  oneIndex: number;
  twoIndex: number;
  twoToggleStatus: () => void;
}

const FolderTree = ({ oneItem, twoItem, rootIndex, oneIndex, twoIndex, twoToggleStatus }: TreeProps) => {
  const [threeToggleStatus, setThreeToggleStatus] = useState({});
  const [fourToggleStatus, setFourToggleStatus] = useState({});

  return (
    twoToggleStatus[`${rootIndex}-${oneIndex}-${twoIndex}`] && (
      <ul className="threeDepthWrap">
        {oneItem.type === 'CAKE'
          ? twoItem.child?.map((threeItem, threeIndex) => (
              <li key={threeIndex}>
                <ul className="threeList">
                  <li>
                    <div className="utilWrap">
                      <div
                        className="arrowWrap"
                        onClick={() => {
                          setThreeToggleStatus((prevState) => ({
                            ...prevState,
                            [`${rootIndex}-${oneIndex}-${twoIndex}-${threeIndex}`]:
                              !prevState[`${rootIndex}-${oneIndex}-${twoIndex}-${threeIndex}`],
                          }));
                        }}
                      >
                        {threeToggleStatus[`${rootIndex}-${oneIndex}-${twoIndex}-${threeIndex}`] ? (
                          <Image src="/images/arrow/arrow_drop_down.svg" alt="arrow" priority width={24} height={24} />
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
                {threeToggleStatus[`${rootIndex}-${oneIndex}-${twoIndex}-${threeIndex}`] && (
                  <div className="fourDepthWrap">
                    {threeItem.child?.map((fourItem, fourIndex) => (
                      <ul key={fourIndex} className="fourList">
                        <li>
                          <div className="utilWrap">
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
                )}
              </li>
            ))
          : twoItem.child?.map((threeItem, threeIndex) => (
              <li key={threeIndex}>
                <ul className="threeListFacebook threeList">
                  <li>
                    <div className="utilWrap">
                      <div
                        className="arrowWrap"
                        onClick={() => {
                          setThreeToggleStatus((prevState) => ({
                            ...prevState,
                            [`${rootIndex}-${oneIndex}-${twoIndex}-${threeIndex}`]:
                              !prevState[`${rootIndex}-${oneIndex}-${twoIndex}-${threeIndex}`],
                          }));
                        }}
                      >
                        {threeToggleStatus[`${rootIndex}-${oneIndex}-${twoIndex}-${threeIndex}`] ? (
                          <Image src="/images/arrow/arrow_drop_down.svg" alt="arrow" priority width={24} height={24} />
                        ) : (
                          <Image src="/images/arrow/arrow_drop_up.svg" alt="arrow" priority width={24} height={24} />
                        )}
                      </div>
                      <div>
                        <input type="checkbox" name="checkBox" id="three" />
                        <label htmlFor="three"></label>
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
                {threeToggleStatus[`${rootIndex}-${oneIndex}-${twoIndex}-${threeIndex}`] && (
                  <ul className="fourDepthWrap">
                    {threeItem.child?.map((fourItem, fourIndex) => (
                      <li key={fourIndex}>
                        <ul className="fourListFacebook">
                          <li>
                            <div className="utilWrap">
                              <div
                                className="arrowWrap"
                                onClick={() => {
                                  setFourToggleStatus((prevState) => ({
                                    ...prevState,
                                    [`${rootIndex}-${oneIndex}-${twoIndex}-${threeIndex}-${fourIndex}`]:
                                      !prevState[`${rootIndex}-${oneIndex}-${twoIndex}-${threeIndex}-${fourIndex}`],
                                  }));
                                }}
                              >
                                {fourToggleStatus[`${rootIndex}-${oneIndex}-${twoIndex}-${threeIndex}-${fourIndex}`] ? (
                                  <Image src="/images/arrow/arrow_drop_down.svg" alt="arrow" priority width={24} height={24} />
                                ) : (
                                  <Image src="/images/arrow/arrow_drop_up.svg" alt="arrow" priority width={24} height={24} />
                                )}
                              </div>

                              <div>
                                <input type="checkbox" name="checkBox" id="four" />
                                <label htmlFor="four"></label>
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
                        {fourToggleStatus[`${rootIndex}-${oneIndex}-${twoIndex}-${threeIndex}-${fourIndex}`] && (
                          <div className="fiveDepthWrap">
                            {fourItem.child?.map((fiveItem, fiveIndex) => (
                              <ul key={fiveIndex} className="fiveListFacebook">
                                <li>
                                  <div className="utilWrap">
                                    <div>
                                      <input type="checkbox" name="checkBox" id="five" />
                                      <label htmlFor="five"></label>
                                    </div>
                                  </div>
                                  <div className="displayInfo">
                                    <div className="channelSymbol">
                                      <p className="tag">{fiveItem.category}</p>
                                    </div>
                                    <strong>{fiveItem.name}</strong>
                                  </div>
                                </li>
                                <li>
                                  <article>{oneItem.udate}</article>
                                  <article>{oneItem.author}</article>
                                  <article>{oneItem.cdate}</article>
                                  <article>{fiveItem.volume}</article>
                                </li>
                              </ul>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
      </ul>
    )
  );
};

export default FolderTree;
