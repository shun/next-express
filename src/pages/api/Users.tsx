import { FC } from "react";

export const Hoge: FC = () => {
  const users = ["mario", "luigi"];
  return (
    <div>
      <div>Hoge Hoge</div>
      {
        users.map((e) => <span>{e}</span>)
      }
    </div>
  );
}
