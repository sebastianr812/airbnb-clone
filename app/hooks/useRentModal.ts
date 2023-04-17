import { create } from 'zustand';

interface RentalModalStore {
    onOpen: () => void;
    isOpen: boolean;
    onClose: () => void;
}

const useRentModal = create<RentalModalStore>((set) => ({
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    isOpen: false
}));

export default useRentModal;