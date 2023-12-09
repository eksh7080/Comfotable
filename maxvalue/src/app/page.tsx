'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [defaultVal, setDefaultVal] = useState<number[]>([]);
  const [maxVal, setMaxVal] = useState<number[]>([]);

  const random = () => {
    const cnt = 100;

    const data = [];
    for (let i = 0; i < cnt; i++) {
      const num = Math.random();
      const percent = (i / cnt) * 100;

      let value;

      if (percent < 20) value = (num * 10).toFixed(0);
      else if (20 <= percent && percent < 40) value = (num * 100).toFixed(0);
      else if (40 <= percent && percent < 60) value = (num * 1000).toFixed(0);
      else if (60 <= percent && percent < 80) value = (num * 10000).toFixed(0);
      else if (80 <= percent && percent < 90) value = (num * 100000).toFixed(0);
      else if (90 <= percent) value = (num * 1000000).toFixed(0);

      data.push(Number(value));
      setDefaultVal(data);
    }
    return data;
  };

  const percentVal = (cur: number, abs: number) => {
    return Math.abs(100 - (cur / abs) * 100);
  };

  const dataFloatCeil = (_value: number) => {
    const str = String(Math.floor(_value));
    const float = Number(_value) * 10;
    let result;

    if (Number(str) <= 1) {
      if (float % 2 === 0) {
        return (Math.ceil((float + 1) / 4) * 4) / 10;
      } else {
        return (Math.ceil(float / 4) * 4) / 10;
      }
    }

    let div = Math.ceil(Number(str.slice(0, str.length < 2 ? 1 : 2)) / 4);
    if (div >= 25) {
      div = 30;
    }
    let res = div * 4 * 10 ** (str.length - (str.length < 2 ? 1 : 2));

    if (percentVal(_value, res) < 10) {
      res = (div + 1) * 4 * 10 ** (str.length - (str.length < 2 ? 1 : 2));
      return res;
    } else {
      return res;
    }
  };

  useEffect(() => {
    random();
  }, []);

  return (
    <section>
      <ul>
        <li>
          기준값
          <br />
          {defaultVal.map((num, index) => (
            <strong key={index}>
              {`${String(num)}: ${dataFloatCeil(num)}`}
              <br />
            </strong>
          ))}
        </li>
      </ul>
    </section>
  );
}
