import React from "react";
import styled from "styled-components";

const whatsappIcon = require("../../assets/images/icons/whatsapp.svg");

export const CardWrapper = styled.article`
  background-color: var(--color-box-base);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;

  header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;

    & img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    & div {
      margin-left: 2.4rem;
    }

    & div strong {
      font: 700 2.4rem "Noto Sans JP";
      display: block;
      color: var(--color-text-title);
    }
  }

  .content > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }

  footer {
    padding: 3.2rem 2rem;
    background-color: var(--color-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 3.2rem;

    display: flex;
    align-items: center;
    justify-content: space-around;

    & p strong {
      color: var(--color-primary);
      font-size: 1.6rem;
      display: block;
    }

    & button {
      width: 20rem;
      height: 5.6rem;
      background-color: var(--color-secondary);
      color: var(--color-button-text);
      border: 0;
      border-radius: 0.8rem;
      cursor: pointer;
      font: 700 1.4rem "Noto Sans JP";

      display: flex;
      align-items: center;
      justify-content: space-evenly;
      transition: background-color 0.35s;
    }

    button:hover,
    button:focus {
      background-color: var(--color-secondary-dark);
    }

    @media (min-width: 700px) {
      header,
      footer {
        padding: 3.2rem;
      }

      .content p {
        padding: 0 3.2rem;
      }

      footer p strong {
        display: initial;
        margin-left: 1.6rem;
      }
    }
  }
`;

type cardProps = {
  avatar?: string;
  name: string;
  subject: string;
  price: string;
  description?: string;
};

const Card: React.FC<cardProps> = ({
  avatar,
  name,
  subject,
  price,
  description,
}) => {
  return (
    <CardWrapper>
      <header>
        <img src={avatar} alt="User's avatar" />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <div className="content">
        {description ? (
          <p>{description}</p>
        ) : (
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium
            dia nois paga. Detraxit consequat et quo num tendi nada.
            <br />
            <br />
            Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.
            Aenean sit amet nisi. Si num tem leite então bota uma pinga aí
            cumpadi!
          </p>
        )}
      </div>

      <footer>
        <p>
          Price per hour
          <strong>{price}</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="WhatsApp contact" />
          Send message
        </button>
      </footer>
    </CardWrapper>
  );
};

export default Card;
