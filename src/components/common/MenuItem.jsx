import { Menu } from "@headlessui/react";
import React from "react";

export const MenuItem = ({ img, image, text }) => {
    return (
        <div className="px-1 py-1 ">
            <Menu.Item>
                {({ active }) => (
                    <button
                        className={`${
                            active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-1 text-sm`}
                    >
                        {active ? (
                            <img src={image} className="mr-2 h-9 w-9 bg-gray-300 rounded-full" aria-hidden="true" alt="pic" />
                        ) : (
                            <img src={image} className="mr-2 h-9 w-9 bg-gray-300 rounded-full" aria-hidden="true" alt="pic" />
                        )}
                        {text}
                    </button>
                )}
            </Menu.Item>
        </div>
    );
};
