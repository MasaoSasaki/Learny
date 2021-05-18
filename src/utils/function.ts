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
  const currentTime = new Date();
  const Year:string = String(currentTime.getFullYear());
  const Month:string = String(currentTime.getMonth() + 1).padStart(2, "0");
  const Day:string = String(currentTime.getDate()).padStart(2, "0");
  const Hour:string = String(currentTime.getHours()).padStart(2, "0");
  const Min:string = String(currentTime.getMinutes()).padStart(2, "0");
  const Sec:string = String(currentTime.getSeconds()).padStart(2, "0");
  return `${Year}-${Month}-${Day} ${Hour}:${Min}:${Sec}`;
};
