import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { ListItemAll, ListItems } from 'types/list';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Container = styled.section`
  max-width: 100%;

  & h1 {
    cursor: pointer;
  }

  & ul {
    & li {
      & .rootList {
        display: flex;
        min-height: 40px;
        padding: 8px 16px;
        width: 100%;

        &:hover {
          background: #f3f3f3;
          border-radius: 6px;
          cursor: pointer;
        }

        & li {
          color: rgba(0, 0, 0, 0.8);
          @include font-variable(13px, 500);

          & article {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        & li:first-of-type {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 4px;

          & .utilWrap {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 4px;

            & .arrow_drop_wrap {
              width: 24px;
              height: 24px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              background-color: #fff;
              border-radius: 6px;
              & .arrow_drop {
                margin-right: 0;
              }
            }
          }

          & .displayInfo {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px;
            gap: 8px;

            & .channelSymbol {
              width: 24px;
              height: 24px;
            }
          }
        }

        & li:last-of-type {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          padding: 0px;
          gap: 32px;
        }
      }
    }
  }
`;

const OneDepth = () => {
  const router = useRouter();

  const [listItems, setListItems] = useState<ListItemAll[]>([]);

  const { isFetching: listFetching } = useQuery(['list'], async () => await axios.get(`/api/list`).data, {
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess(item) {
      setListItems([...item.file, ...item.folder]);
      console.log(item, 'item');
    },
  });

  console.log(listItems);

  return (
    <Container>
      <h1 onClick={() => router.back()}>뒤로 가기</h1>
      <ul>
        {listItems.map((rootItem, rootIndex) => (
          <li key={rootIndex}>
            <ul className="rootList">
              <li>
                <div className="utilWrap">
                  <div className="arrow_drop_wrap">
                    <div className="arrow_drop">
                      <Image src="/images/arrow/arrow_drop_up.svg" alt="create-arrow-up" priority width={24} height={24} />
                    </div>
                  </div>
                  <div>
                    <Image src="/images/folder/folder.svg" alt="GroupFolder" priority width={24} height={24} />
                  </div>
                </div>
                <div className="displayInfo">
                  <div className="check_box">
                    <div className="che_wrap f_a_c">
                      <input type="checkbox" name="dataChk3" id="root" />
                      <label htmlFor="root"></label>
                    </div>
                  </div>
                  <strong className="title">{rootItem.title}</strong>
                </div>
              </li>
              <li>
                <article className="edit_date">{rootItem.udate}</article>
                <article className="creater">{rootItem.author}</article>
                <article className="create_date">{rootItem.cdate}</article>
                <article className="volume">{rootItem.volume}</article>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default OneDepth;
