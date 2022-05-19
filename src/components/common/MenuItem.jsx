import { Menu } from "@headlessui/react";
import React from "react";

export const MenuItem = ({ icon: Icon, text }) => {
    return (
        <div className="px-1 py-1 ">
            <Menu.Item>
                {({ active }) => (
                    <button
                        className={`${
                            active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                        {active ? (
                            <Icon className="mr-2 h-5 w-5" aria-hidden="true" />
                        ) : (
                            <Icon className="mr-2 h-5 w-5" aria-hidden="true" />
                        )}
                        {text}
                    </button>
                )}
            </Menu.Item>
        </div>
    );
};
