// 配列の順番をシャッフルする
export const shuffle = <T extends {}>([...array]: T[]): T[] => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// timestampの時間が数字一桁なら先頭に"0"を追加する
export const timeStamp = (): string => {
  const addDateZero = (value: number): string => {
    return value <= 9 ? `0${value}` : `${value}`;
  };
  const currentTime = new Date();
  const Year:string = String(currentTime.getFullYear());
  const Month:string = addDateZero(currentTime.getMonth() + 1);
  const Day:string = addDateZero(currentTime.getDate());
  const Hour:string = addDateZero(currentTime.getHours());
  const Min:string = addDateZero(currentTime.getMinutes());
  const Sec:string = addDateZero(currentTime.getSeconds());
  return `${Year}-${Month}-${Day} ${Hour}:${Min}:${Sec}`;
};
