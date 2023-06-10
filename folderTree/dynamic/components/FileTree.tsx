import Image from 'next/image';

interface IProps {
  rootItem: ListTreeItems;
  twoItem: ListTreeChildItems;
  rootIndex: number;
  oneIndex: number;
  twoIndex: number;
  oneToggleStatus: () => void;
}

const FileTree = ({
  rootItem,
  // twoItem,
  rootIndex,
  oneToggleStatus,
}: //  oneIndex,
//   twoIndex,

IProps) => {
  return (
    <ul className="oneDepthWrap">
      {rootItem.child.map((oneItem, oneIndex) => (
        <li key={oneIndex}>
          <ul className="oneList">
            <li>
              <div className="utilWrap">
                <div
                  className="arrowWrap"
                  //   onClick={() => {
                  //     setOneToggleStatus((prevState) => ({
                  //       ...prevState,
                  //       [`${rootIndex}-${oneIndex}`]: !prevState[`${rootIndex}-${oneIndex}`],
                  //     }));
                  //   }}
                >
                  {oneToggleStatus[`${rootIndex}-${oneIndex}`] ? (
                    <Image src="/images/arrow/arrow_drop_down.svg" alt="arrow" priority width={24} height={24} />
                  ) : (
                    <Image src="/images/arrow/arrow_drop_up.svg" alt="arrow" priority width={24} height={24} />
                  )}
                </div>
                <article>
                  <input type="checkbox" name="checkBox" id="one" readOnly />
                  <label htmlFor="one"></label>
                </article>
              </div>
              <div className="displayInfo">
                <div className="channelSymbol">
                  <p className="tag">{oneItem.category}</p>
                </div>
                <strong>{oneItem.name}</strong>
              </div>
            </li>
            <li>
              <article>{rootItem.udate}</article>
              <article>{rootItem.author}</article>
              <article>{rootItem.cdate}</article>
              <article>{oneItem.volume}</article>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default FileTree;
