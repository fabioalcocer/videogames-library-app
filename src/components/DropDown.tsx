"use client";
import { Dropdown } from "flowbite-react";

function DropDown() {
  return (
    <div className="">
      <Dropdown
        theme={{
          floating: {
            target:
              "floating w-36 bg-neutral-700/40 p-2 px-4 text-sm text-zinc-100 rounded-md",
          },
        }}
        className="px-5 text-center"
        label="Platforms"
        inline={true}
      >
        <Dropdown.Item className="pointer-events-none justify-center">
          <span className="block text-sm text-gray-400">Platforms</span>
        </Dropdown.Item>
        <Dropdown.Item className="justify-center text-center">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            PC
          </a>
        </Dropdown.Item>
        <Dropdown.Item className="justify-center">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            PlayStation
          </a>
        </Dropdown.Item>
        <Dropdown.Item className="justify-center">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            Xbox
          </a>
        </Dropdown.Item>
        <Dropdown.Item className="justify-center">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            iOS
          </a>
        </Dropdown.Item>
        <Dropdown.Item className="justify-center">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            Android
          </a>
        </Dropdown.Item>
        <Dropdown.Item className="justify-center">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            Nintendo
          </a>
        </Dropdown.Item>
        <Dropdown.Item className="justify-center">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            Web
          </a>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default DropDown;
