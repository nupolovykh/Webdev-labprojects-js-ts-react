import { createContext, useState } from "react";

interface IModalContext {
	sender: object | null
	open: (sender : object) => void
	close: () => void
}

export const ModalContext = createContext<IModalContext>({
	sender: null,
	open: (sender : object) => {},
	close: () => {}
})

export const ModalState = ({ children } : {children: React.ReactNode}) => {
	const [sender, setSender] = useState<object | null>(null)

	const open = (newSender : object) => {
		setSender(newSender);
	}

	const close = () => {
		setSender(null);
	}

	return (
		<ModalContext.Provider value={{sender, open, close}}>
			{children}
		</ModalContext.Provider>
	)
}