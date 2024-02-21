import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SingleOptionType } from "../../types/SingleOptionType";
import { OptionsListType } from "../../types/OptionsListType";
import { StyledOption } from "../StyledOption";
import { StyledList } from "../StyledList";
import { Question } from "../Question";
import { Button } from "../Button";

export const OptionsList: FC<OptionsListType> = ({ answer, setCurrentLanguage, currentQuestion }) => {
  const [optionsCounter, setOptionsCounter] = useState(0);
  const [options, setOptions] = useState<SingleOptionType[]>([]);
  const { id, type, alignment } = answer;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const updateOption = (option: SingleOptionType) => {
    setOptions(prevOptions => {
      const updatedOptions = prevOptions.map(opt => {
        if (opt.id === option.id) {
          const updatedOption = { ...opt, checked: !opt.checked };
          if (updatedOption.checked) {
            setOptionsCounter(prevCounter => prevCounter + 1);
          } else {
            setOptionsCounter(prevCounter => prevCounter - 1);
          }
          return updatedOption;
        }
        return opt;
      });
      return updatedOptions;
    });
  }

  const handleClick = (option: SingleOptionType) => {
    if (type === 'language') {
      if (option.code) {
        setCurrentLanguage(option.code);
      }
      localStorage.setItem(`${answer.id}`, `${currentQuestion.id}, ${currentQuestion.title}, ${type}, ${option.title}`);
      navigate(`/user-quiz/quiz/${answer.id + 1}`);
    }

    if (type === 'single') {
      localStorage.setItem(`${answer.id}`, `${currentQuestion.id}, ${currentQuestion.title}, ${type}, ${option.title}`);
      navigate(`/user-quiz/quiz/${answer.id + 1}`)
    }

    if (type === 'multiple' || type === 'bubble') {
      updateOption(option);
    }
  }

  useEffect(() => {
    setOptions(answer.options);
    setOptionsCounter(0);
  }, [answer])

  useEffect(() => {
    if (type === 'multiple' || type === 'bubble') {
      const checkedItems = options.filter(opt => opt.checked);
      const titlesToStorage: string[] = [];
      if (checkedItems) {
        checkedItems.forEach((item) => titlesToStorage.push(item.title))
      }
      localStorage.setItem(`${answer.id}`, `${currentQuestion.id}, ${currentQuestion.title}, ${type}, ${[...titlesToStorage]}`);
    }
  }, [options, answer, currentQuestion, type]);

  return (
    <>
      <Question question={t(`question_${id}`)} description={t(`question_${id}_desc`)}></Question>
      <StyledList alignment={answer.alignment} type={answer.type}>
        {options.map(option =>
          <StyledOption
            alignment={alignment}
            type={answer.type}
            key={option.id}
            onClick={() => { handleClick(option) }}
            active={option.checked}
          >
            {option.imgUrl && <img src={option.imgUrl}></img>}

            {t(`answer_${id}_${option.id}`)}

            {type === 'multiple' &&
              <>
                <input
                  type='checkbox'
                  id='option'
                  className='checkbox'
                  checked={option.checked || false}
                  onChange={() => { handleClick(option) }}
                />
                <label htmlFor='option' />
              </>
            }
          </StyledOption>
        )}

        {type === 'multiple' &&
          <Button
            buttonClass="button"
            handler={() => navigate(`/user-quiz/quiz/${answer.id + 1}`)}
            title={t(`button_next`)}
            disabled={optionsCounter < 1}
          />
        }

        {type === 'bubble' &&
          <Button
            disabled={optionsCounter < 1 || optionsCounter > 3}
            handler={() => navigate(`/user-quiz/loader`)}
            title={t(`button_next`)}
          />
        }
      </StyledList>
    </>
  )
}
