import React from "react";

import { Wrapper,Content } from "./footer.syle";

const Footer = ({bottom}) =>{

    return(
        <Wrapper>
            <Content className={bottom} >
                <div>
                <a href="mailto:arush.ag11@gmail.com" target='_blank'>Gmail</a>
                <a href="https://www.linkedin.com/in/arush-gupta-060517203/" target="_blank" >LinkedIn</a>
                
                </div>
            </Content>
        </Wrapper>
    )
}

export default Footer