import React, { useState } from 'react'
import './style.scss'

const SwitchTabs = ({data,onTabChange}) => {
    const [selectedTab,setSelectedTab]=useState(0)
    const [left,setLeft]=useState(0)

const activeTab=(tab,index)=>{
    setLeft(index*100)
    setTimeout(()=>{
        setSelectedTab(index)
    },300)
    onTabChange(tab,index)

}

  return (
    <div className='switchingTabs'>
        <div className="tabItems">
            {data.map((item,index)=>
                <span onClick={()=>activeTab(item,index)} className={`tabItem ${selectedTab===index?'active':''}`} key={index}>
                    {item}
                </span>
            )}
            <span className="movingBg" style={{left}}></span>
        </div>
        
        </div>
  )
}

export default SwitchTabs