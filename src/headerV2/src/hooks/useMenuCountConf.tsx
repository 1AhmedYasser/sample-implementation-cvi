import { useEffect, useState } from 'react';
import useStore from "../store/store";

export const useMenuCountConf = () => {
  const unansweredChatsLength = useStore((state) => state.unansweredChatsLength());
  const { myChats, otherChats } = useStore((state) => state.getGroupedActiveChats());
  const pendingChatsLength = useStore((state) => state.pendingChatsLength());
  const validationMessagesLength = useStore((state) => state.validationMessagesLength());

  const [menuCountConf, setMenuCountConf] = useState({});

  useEffect(() => {
    setMenuCountConf({
      "/unanswered": unansweredChatsLength,
      "/active": otherChats.length + myChats.length,
      "/pending": pendingChatsLength,
      "/validations": validationMessagesLength,
    });
  }, [unansweredChatsLength, otherChats.length, myChats.length, pendingChatsLength, validationMessagesLength]);

  return menuCountConf;
};
