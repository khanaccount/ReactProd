import React, { useState } from "react";
import s from "./index.module.scss";

import { SearchSvg } from "./svg/SearchSvg";
import profileSvg from "../../assets/icons/profileSvg.svg";
import { CrossSvg } from "./svg/CrossSvg";

export const Header: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsFocused(event.target.value.length > 0);
  };

  const handleClear = () => {
    setInputValue("");
    setIsFocused(false);
  };
  return (
    <header className={s.header}>
      <a className={s.logo} href="/">
        Product scanner
      </a>
      <div className={s.searchField}>
        <div className={isFocused ? s.searchFieldSvgFocused : s.searchFieldSvg}>
          <SearchSvg />
        </div>
        <input
          className={s.searchInput}
          placeholder="Искать в product scanner"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        {inputValue && (
          <div className={s.crossSvg} onClick={handleClear}>
            <CrossSvg />
          </div>
        )}
      </div>
      <div className={s.auth}>
        <div className={s.authSvg}>
          <img src={profileSvg} alt="profileSvg" />
        </div>
        <span className={s.login}>Войти</span>
      </div>
    </header>
  );
};
