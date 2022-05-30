import React, { useContext } from "react";
import { NavigationContext } from "../contexts/navigation.context";
import Logo from "./common/Logo";
import { BiMessageRounded } from 'react-icons/bi';
import { links } from "../data/AllLinks";

const Sidebar = () => {
    const { sideBarOpen } = useContext(NavigationContext);
    return (
        <div className={`fixed w-[250px] bg-white border-r border-gray-200 h-screen top-0 left-0 z-10 ${sideBarOpen?"translate-x-0":"-translate-x-[100%]"}`}>
           <Logo />
            <div className="pt-5 no-scrollbar overflow-y-auto h-[470px]">
                {links?.map(({ icon, link, name, childrenLinks }, index) => {
                    if (childrenLinks?.length > 0) {
                        return (
                            <div>
                           <div key={index}>{ name}</div>
                           {childrenLinks.map(({ name, link }, index) => {
                            return (
                                <di>
                                    <div key={index}>{ name}</div>
                                </di>
                            
                        )
                        })}
                            </div>
                        )
                        
                        
                        
                    } else {
                        return (
                        <div
                            key={index}
                            className="ml-5 p-1.5 flex hover:text-blue-600 "
                        >
                           {name}
                        </div>
                    );
                    }
                    
                })}
            </div>
            <div className="py-4 pl-6 border-t border-gray-200">
               <span className="h-6 w-6 bg-red-400 rounded-full"><BiMessageRounded className="h-6 w-6 text-red-400" /></span> 
            </div>
        </div>
    );
};

export default Sidebar;
