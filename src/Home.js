import React, {useState} from 'react'
import {Tabs, Tab, AppBar } from '@material-ui/core'
import Contact from './Contact'
import About from './About'

// AppBar는 그냥 background를 채워주는 역할 정도를 하는 거라고 생각하자.
// position = "static" 은 항상 맨위에 나오도록 하게 만드는 역할이라고 생각하면 됨. sticky?


const Home = (props) => {
    const {match,history} = props
    const {params} = match
    const {page} = params

    const tabNameToIndex = {
        0:'about',
        1:'contact'
    }

    const indexToTabName = {
        about:0,
        contact:1
    }

    console.log(page)

    const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);

    const handleChange = (event, newValue) => {
        history.push(`/home/${tabNameToIndex[newValue]}`)
        setSelectedTab(newValue)
    }

    return (
        <>
            <AppBar position="static">
                <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab label="About"/>
                    <Tab label="Contact Us"/>
                </Tabs>
            </AppBar>
            {selectedTab === 0 && <About/>}
            {selectedTab === 1 && <Contact/>}
        </>
    )
}

export default Home