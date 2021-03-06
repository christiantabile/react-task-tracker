import PropTypes from 'prop-types'
import Button from './Button'

// Components are upcased in file naming conventions

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button
                onClick={onClick}
                text='Hello'
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header