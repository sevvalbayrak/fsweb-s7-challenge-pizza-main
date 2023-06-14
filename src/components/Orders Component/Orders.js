import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './orders.css'


const Orders = () => {

  const [item, setItem] = useState({ kindOfStand: "", another: "another" });

  const { kindOfStand } = item;

  const extras = ['Pepperoni', 'Domates', 'Biber', 'Sosis', 'Mısır', 'Sucuk', 'Kanada Jambonu', 'Ananas', 'Tavuk Izgara', 'Jalepeno', 'Kabak', 'Soğan', 'Sarımsak']

  const handleChange = e => {
    e.persist();
    console.log(e.target.value);

    setItem(prevState => ({
      ...prevState,
      kindOfStand: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`${kindOfStand}`);
  };

  return (
    <div class="orders-wrapper flex-center-column">
      <div class="header flex-center-column">
        <h1 class="header-title">Teknolojik Yemekler</h1>
        <p class="links"><a href="/">Ana Sayfa</a> - Seçenekler - <span>Sipariş Oluştur</span></p>
      </div>
      <div class="order-form-wrapper flex-center-column">
        <div class="form-wrapper flex-center-column">
          <p class="main-title">Position Absolute Acı Pizza</p>
          <div class="order-details">
            <div class="detail-wrapper">
              <p class="price">85.50₺</p>
              <div class="rating">
                <p>4.9</p>
                <p>(200)</p>
              </div>
            </div>
            <div class="product-detail">Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</div>
          </div>
          <div class="selection-size-dough">
            <div class="size">
              <p class="size-title">Boyut Seç <span style={{ color: "#CE2829" }}>*</span></p>
              <div>
                <Form.Group class="radio-buttons" controlId="kindOfStand">
                  <Form.Check
                    value="small"
                    type="radio"
                    aria-label="radio 1"
                    label="Küçük"
                    onChange={handleChange}
                    checked={kindOfStand === "small"}
                  />
                  <Form.Check
                    value="medium"
                    type="radio"
                    aria-label="radio 2"
                    label="Orta"
                    onChange={handleChange}
                    checked={kindOfStand === "medium"}
                  />
                  <Form.Check
                    value="large"
                    type="radio"
                    aria-label="radio 2"
                    label="Büyük"
                    onChange={handleChange}
                    checked={kindOfStand === "large"}
                  />
                </Form.Group>
              </div>
            </div>
            <div class="dough">
              <p class="size-title">Hamur Seç <span style={{ color: "#CE2829" }}>*</span></p>
              <div>
                <DropdownButton id="dropdown-basic-button" title="Hamur Kalınlığı">
                  <Dropdown.Item href="#/action-1">Super Ince</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Ince</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Kalın</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </div>
          <div class="selection-extras">
            <p class="size-title">Ek Malzemeler</p>
            <p class="extras-explanation">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <Form className="extras-wrapper">
              {extras.map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={"checkbox"}
                    id={`${type}`}
                    label={` ${type}`}
                  />
                </div>
              ))}
            </Form>
          </div>
          <div class="order-checkout">
            <div>
              <p class="size-title">Sipariş Notu</p>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Siparişine eklemek istediğin bir not var mı?" />
              </Form.Group>
            </div>
            <hr style={{ margin: "45px 0" }} />
            <div class="checkout-wrapper">
              <div class="amount">
                <div class="specbutton dec specamount">-</div>
                <div class="number specamount">1</div>
                <div class="specbutton inc specamount">+</div>
              </div>
              <div class="checkout-detail">
                <div class="total-wrapper">
                  <p class="total-title">Sipariş Toplamı</p>
                  <div class="total">
                    <p class="total-title-small">Seçimler</p>
                    <p class="total-title-small">25.00₺</p>
                  </div>
                  <div class="total">
                    <p class="total-money">Toplam</p>
                    <p class="total-money ">110.50₺</p>
                  </div>
                </div>
                <button class="give-order-button">Sipariş Ver</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
