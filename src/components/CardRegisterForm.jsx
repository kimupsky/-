import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardDispatchContext } from "../App";
import Button from "./Button";

const CardRegisterForm = () => {
  const nav = useNavigate();
  const { onAddCard } = useContext(CardDispatchContext);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting, errors },
  } = useForm();

  const cardOwnerValue = watch("cardOwner", "");
  const cardOwnerLength = cardOwnerValue.length;

  const onChangeCardNumber = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value
      .slice(0, 16)
      .replace(/(\d{4})/g, "$1-")
      .replace(/-$/, "");
    setValue("cardNumber", value);
  };

  const onChangeCardDate = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = `${value.slice(0, 2)} / ${value.slice(2, 4)}`;
    }
    setValue("cardDate", value);
  };

  const onChangeCardOwner = (e) => {
    let value = e.target.value.toUpperCase();
    if (value.length > 30) {
      value = value.slice(0, 30);
    }
    setValue("cardOwner", value);
  };

  const onChangeSecurityCode = (e) => {
    let value = e.target.value;
    if (value.length > 3) {
      value = value.slice(0, 3);
    }
    setValue("securityCode", value);
  };

  const onChangeCardPassword = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (value.length > 1) {
      value = value.slice(0, 1);
    }
    setValue(name, value);
  };

  return (
    <form
      className="max-w-xl w-full mx-auto px-7 pt-[25px] pb-[34px]"
      onSubmit={handleSubmit(async (data) => {
        onAddCard(data);
        nav(-1);
      })}
    >
      <label htmlFor="cardNumber" className="register-label">
        카드번호
      </label>
      <input
        id="cardNumber"
        type="text"
        className={`register-input text-center ${
          errors.cardNumber ? "mb-0" : ""
        }`}
        {...register("cardNumber", {
          required: "카드번호를 입력해주세요.",
          onChange: onChangeCardNumber,
          pattern: {
            value: /\d{4}-\d{4}-\d{4}-\d{4}/,
            message: "16자리 숫자를 입력해주세요.",
          },
        })}
      />
      {errors.cardNumber && (
        <div className="register-error">{errors.cardNumber.message}</div>
      )}
      <label htmlFor="cardDate" className="register-label">
        만료일
      </label>
      <input
        id="cardDate"
        type="text"
        className={`register-input  w-2/4 text-center ${
          errors.cardDate ? "mb-0" : ""
        }`}
        placeholder="MM / YY"
        {...register("cardDate", {
          required: "만료일을 입력해주세요.",
          onChange: onChangeCardDate,
          pattern: {
            value: /^(0[1-9]|1[0-2]) \/ \d{2}$/,
            message: "유효한 만료일을 입력해주세요.",
          },
        })}
      />
      {errors.cardDate && (
        <div className="register-error">{errors.cardDate.message}</div>
      )}
      <div className="flex justify-between">
        <label htmlFor="cardOwner" className="register-label">
          카드 소유자 이름
        </label>
        <div className="register-label">{cardOwnerLength} / 30</div>
      </div>
      <input
        id="cardOwner"
        type="text"
        className={`register-input ${errors.cardOwner ? "mb-0" : ""}`}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        {...register("cardOwner", {
          required: "카드 소유자 이름을 입력해주세요.",
          onChange: onChangeCardOwner,
          minLength: {
            value: 2,
            message: "최소 2자 이상 입력해주세요.",
          },
          pattern: {
            value: /^[A-Z]*$/,
            message: "영문 이름을 입력해주세요.",
          },
        })}
      />
      {errors.cardOwner && (
        <div className="register-error">{errors.cardOwner.message}</div>
      )}
      <label htmlFor="securityCode" className="register-label">
        보안 코드(CVC/CVV)
      </label>
      <div
        className={`flex gap-[11px] items-center ${
          errors.securityCode ? "" : "mb-[19px]"
        }`}
      >
        <input
          id="securityCode"
          type="password"
          className="register-input mb-0 w-1/4 text-center"
          {...register("securityCode", {
            required: "보안 코드를 입력해주세요.",
            onChange: onChangeSecurityCode,
            pattern: {
              value: /^\d{3}$/,
              message: "3자리 숫자를 입력해주세요.",
            },
          })}
        />
        <div className="w-[27px] h-[27px] border border-[#BABABA] text-[#969696] text-xl font-medium text-center rounded-full cursor-pointer">
          ?
        </div>
      </div>
      {errors.securityCode && (
        <div className="register-error">{errors.securityCode.message}</div>
      )}
      <label id="cardPasswordLabel" className="register-label">
        카드 비밀번호
      </label>
      <div className="flex gap-[7px]">
        <input
          id="cardPassword1"
          type="password"
          aria-labelledby="cardPasswordLabel"
          className={`register-input w-[12%] text-center ${
            errors.cardPassword1 || errors.cardPassword2 ? "mb-0" : ""
          }`}
          {...register("cardPassword1", {
            required: "카드 비밀번호를 입력해주세요.",
            onChange: onChangeCardPassword,
            pattern: {
              value: /\d/,
              message: "숫자만 입력 가능합니다.",
            },
          })}
        />
        <input
          id="cardPassword2"
          type="password"
          aria-labelledby="cardPasswordLabel"
          className={`register-input w-[12%] text-center ${
            errors.cardPassword1 || errors.cardPassword2 ? "mb-0" : ""
          }`}
          {...register("cardPassword2", {
            required: "카드 비밀번호를 입력해주세요.",
            onChange: onChangeCardPassword,
            pattern: {
              value: /\d/,
              message: "숫자만 입력 가능합니다.",
            },
          })}
        />
        <div className="w-[12%] px-3 py-2 text-center font-medium text-lg cursor-default">
          •
        </div>
        <div className="w-[12%] px-3 py-2 text-center font-medium text-lg cursor-default">
          •
        </div>
      </div>
      {(errors.cardPassword1 || errors.cardPassword2) && (
        <div className="register-error">
          {errors.cardPassword1?.message || errors.cardPassword2?.message}
        </div>
      )}
      <div className="mt-[14px]">
        <Button text={"작성 완료"} isDisabled={isSubmitting} />
      </div>
    </form>
  );
};

export default CardRegisterForm;
