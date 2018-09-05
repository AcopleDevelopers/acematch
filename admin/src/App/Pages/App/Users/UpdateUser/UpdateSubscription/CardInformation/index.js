import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import moment from 'moment'
import DeleteCard from './DeleteCard'

export default class CardInformation extends React.Component {
  static propTypes = {
    user: PropTypes.object
  }

  noCard() {
    return (
      <div className={styles.noCard}>
        Este usuario no posee una tarjeta inscríta.
      </div>
    )
  }

  renderCard() {
    const {card} = this.props.user.creditCard
    return (
      <div className={styles.card}>
        <h1>Información de la tarjeta inscrita</h1>
        <ul>
          <li>
            Ultimos 4 dígitos: <strong>{card.last_4_digits}</strong>
          </li>
          <li>
            Tipo de tarjeta: <strong>{card.card_type}</strong>
          </li>
          <li>
            Tipo de pago: <strong>{card.payment_type}</strong>
          </li>
          <li>
            Fecha de inscripción:
            <strong>{moment(card.created_at).format('DD/MM/YYYY')}</strong>
          </li>
        </ul>
      </div>
    )
  }

  render() {
    const {user} = this.props
    if (!user.creditCard || !user.creditCard.uid) return this.noCard()
    return (
      <div className={styles.container}>
        {this.renderCard()}
        <DeleteCard user={user} card={user.creditCard.card} />
      </div>
    )
  }
}
