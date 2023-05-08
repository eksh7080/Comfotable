import { ListTreeChildItems, ListTreeItems } from 'types/list';
import Image from 'next/image';

interface TreeProps {
  oneItem: ListTreeItems[];
  twoItem: ListTreeChildItems[];
}

const FolderTree = ({ oneItem, twoItem }: TreeProps) => {
  return (
    <ul className="threeDepthWrap">
      {oneItem.type === 'CAKE'
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
              <div className="fourDepthWrap">
                {threeItem.child?.map((fourItem, fourIndex) => (
                  <ul key={fourIndex} className="fourList">
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
              <ul className="fourDepthWrap">
                {threeItem.child?.map((fourItem, fourIndex) => (
                  <li key={fourIndex}>
                    <ul className="fourListFacebook">
                      <li>
                        <div className="utilWrap">
                          <div className="arrowWrap">
                            <Image src="/images/arrow/arrow_drop_up.svg" alt="arrow" priority width={24} height={24} />
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
                    <div className="fiveDepthWrap">
                      {fourItem.child?.map((fiveItem, fiveIndex) => (
                        <ul key={fiveIndex} className="fiveListFacebook">
                          <li>
                            <div className="utilWrap">
                              <div className="arrowWrap">
                                <Image src="/images/arrow/arrow_drop_up.svg" alt="arrow" priority width={24} height={24} />
                              </div>
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
                  </li>
                ))}
              </ul>
            </li>
          ))}
    </ul>
  );
};

export default FolderTree;
