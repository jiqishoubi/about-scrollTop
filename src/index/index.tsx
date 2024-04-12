import React, { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

const defaultList = new Array(20).fill(0);

const Index: React.FC = () => {
  const navigate = useNavigate();

  // const [list, setList] = React.useState<number[]>([]);

  // useEffect(() => {
  //   console.log(`🚀 ~ index useEffect load`);
  //   setList([...defaultList]);
  // }, []);

  // useLayoutEffect(() => {
  //   console.log(`🚀 ~ index useLayoutEffect load`);
  //   setList(defaultList);
  // }, []);

  return (
    <div className={styles.page}>
      {defaultList.map((_, i) => (
        <div
          key={i}
          className={styles.item}
          onClick={() => {
            navigate(`/detail`);
          }}
        >
          item {i}
          <div>点击跳转到详情页</div>
        </div>
      ))}
    </div>
  );
};

export default Index;
