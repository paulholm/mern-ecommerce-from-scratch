import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import {
  faStar as faStarSolid,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons'

export const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      <span>
        <FontAwesomeIcon
          icon={
            value >= 1 ? faStarSolid : value >= 0.5 ? faStarHalfAlt : faStar
          }
          style={{ color }}
        />
      </span>
      <span>
        <FontAwesomeIcon
          icon={
            value >= 2 ? faStarSolid : value >= 1.5 ? faStarHalfAlt : faStar
          }
          style={{ color }}
        />
      </span>
      <span>
        <FontAwesomeIcon
          icon={
            value >= 3 ? faStarSolid : value >= 2.5 ? faStarHalfAlt : faStar
          }
          style={{ color }}
        />
      </span>
      <span>
        <FontAwesomeIcon
          icon={
            value >= 4 ? faStarSolid : value >= 3.5 ? faStarHalfAlt : faStar
          }
          style={{ color }}
        />
      </span>
      <span>
        <FontAwesomeIcon
          icon={
            value >= 5 ? faStarSolid : value >= 4.5 ? faStarHalfAlt : faStar
          }
          style={{ color }}
        />
      </span>
      <span>{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  value: 0,
  color: '#f8e825',
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}
