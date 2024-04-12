import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'

const Index: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className={styles.btn_box}>
        <button
          onClick={() => {
            navigate(-1)
          }}
        >
          返回列表页
        </button>
        <button
          onClick={() => {
            navigate('/index')
          }}
        >
          跳转列表页
        </button>
      </div>
      <div className={styles.box}>这是deal页</div>
    </>
  )
}

export default Index
