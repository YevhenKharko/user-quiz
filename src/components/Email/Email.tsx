import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../Button";
import { StyledEmail } from "../StyledEmail";

export const Email = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  }

  const handleSubmit = () => {
    if (!email.length) {
      return;
    }
  
    const localStorageKeys = Object.keys(localStorage);
    const existingEmailKey = localStorageKeys.find(key => {
      const data = localStorage.getItem(key);
      return data && data.includes('Email');
    });
  
    if (existingEmailKey !== undefined) {
      localStorage.setItem(existingEmailKey, `${existingEmailKey}, Email, email, ${email}`);
    } else {
      const questionIds = localStorageKeys.map(key => parseInt(key)).filter(id => !isNaN(id));
      const latestQuestionId = Math.max(...questionIds, 0);
      localStorage.setItem(`${latestQuestionId + 1}`, `${latestQuestionId + 1}, Email, email, ${email}`);
    }
  
    navigate('/user-quiz/success');
  }
  

  return (
    <StyledEmail>
      <div className="title">
        <h2>Email</h2>

        <h3>{t('email_text')}</h3>
      </div>

      <input 
        type="email"
        placeholder={t('email_placeholder')} 
        value={email} 
        onChange={(e) => handleInputChange(e)}
        style={{ border: isValidEmail ? '' : '1px solid #e4229c' }}
      />

      <Button 
        title={isValidEmail ? t('button_next') : t('button_error')} 
        type="submit"
        handler={handleSubmit}
        disabled={!isValidEmail}
      />
    </StyledEmail>
    )
}