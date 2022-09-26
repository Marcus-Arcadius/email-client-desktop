import React from 'react';
import { useSelector } from 'react-redux';

// SVG LOGO
import teliosLogoSVG from '../../../../../resources/img/telios_logo.svg';

// COMPONENTS
import MessageDisplay from './MessageDisplay';
import Composer from '../../../../composer_window/Composer';

// REDUX STATE SELECTORS
import {
  selectActiveFolder,
  activeMessageObject,
  activeMessageSelectedRange,
  selectActiveMailbox,
  selectAllNamespaces,
  selectAllAliases
} from '../../../selectors/mail';

type Props = {
  onComposerClose: (opts: any) => void;
  onComposerMaximize: () => void;
};

function MessageDisplayRouter(props: Props) {

  const { onComposerClose, onComposerMaximize } = props;

  const showComposerInline = useSelector(
    state => state.globalState.editorIsOpen
  );

  const highlight = useSelector(state => state.globalState.highlightText);

  const mailbox = useSelector(selectActiveMailbox);
  const namespaces = useSelector(selectAllNamespaces);
  const aliases = useSelector(selectAllAliases);
  const currentFolder = useSelector(selectActiveFolder);
  const message = useSelector(activeMessageObject);
  const selectedItems = useSelector(activeMessageSelectedRange).items;

  const showComposer =
    ((message.emailId && currentFolder.name === 'Drafts') || showComposerInline) &&
    selectedItems.length <= 1;

  return (
    <>
      {(message.emailId === null || selectedItems.length > 1) && !showComposer && (
        <div className="flex flex-1 items-center flex-col justify-center pb-16">
          <img
            className="opacity-5 w-40 h-40"
            src={teliosLogoSVG}
            alt="Telios Logo"
          />
          {selectedItems.length > 1 && (
            <div className="text-lg mt-2">
              You have{' '}
              <span className="text-purple-600 text-bold">
                {selectedItems.length}
              </span>{' '}
              emails selected.
            </div>
          )}
        </div>
      )}
      {message.emailId !== null &&
        selectedItems.length < 2 &&
        message.fromJSON &&
        !showComposer && (
          <MessageDisplay highlight={highlight} message={message} />
        )}
      {showComposer && (
        <Composer
          onClose={onComposerClose}
          onMaximize={onComposerMaximize}
          folder={currentFolder}
          mailbox={mailbox}
          namespaces={namespaces}
          aliases={aliases}
          message={message}
          isInline
        />
      )}
    </>
  );
}

export default MessageDisplayRouter;
