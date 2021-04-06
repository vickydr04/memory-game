import { render, fireEvent } from '@testing-library/react'
import Modal from './Modal';

test('modal shows the children and a close button', () => {
    const handleClose = jest.fn()

    const { getByText } = render(
        <Modal handleModal={handleClose}>
            <div>New game</div>
        </Modal>
    )
    expect(getByText(/Score/)).toBeTruthy()

    fireEvent.click(getByText(/New game/i))

    expect(handleClose).toHaveBeenCalledTimes(1)
})