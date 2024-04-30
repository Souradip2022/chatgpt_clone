"use client"
import React, {useState} from 'react';
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {HiArrowNarrowUp} from "react-icons/hi";

function UserText(): React.JSX.Element {

  const [submit, setSubmit] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [rows, setRows] = useState<number>(1);
  console.log(submit);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const newValue: string = e.target.value;
    setValue(e.target.value); // Update the state with the new value
    if (newValue.trim() !== "") setDisabled(false); // Enable button if newValue is not just whitespace
    else setDisabled(true); // Disable button if newValue is empty or just whitespace


    // console.log(newValue.length)
  }


  return (
    <>
      <Textarea
        value={value}
        placeholder="Message ChatGPT..."
        className=" rounded-2xl text-2xl border-accent-foreground border-b px-8  bottom-14 resize-none py-4 pr-16 md:py-4 md:pr-16  flex flex-row justify-center items-center scrollbar-hide min-h-[70px] max-h-[25dvh]  box-border"
        rows={rows}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === "Enter") {
            setSubmit(true)
          }

          if (e.key === "Enter" && e.shiftKey) {
            e.preventDefault();
            setValue((prevValue) => prevValue + '\n');
            setRows((prev) => prev + 1);
          }
        }}
        onChange={(e) => handleChange(e)}/>
      <Button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 h-10 rounded-xl pl-2 pr-2"
        size={"sm"}
        disabled={disabled}
        onClick={(e: React.MouseEvent) => {
          setSubmit(true);
        }}>
        <HiArrowNarrowUp size={25}/>
      </Button>
    </>
  );
}

export default UserText;