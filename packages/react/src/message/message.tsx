import * as React from 'react';

type Type = 'info' | 'success' | 'warning' | 'danger';

export interface MessageProps {
  type?: Type;
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Message: React.FC<MessageProps> = ({
  children = 'This text represents a message to end users. It can contain any kind of detail necessary.',
  footer,
  header = 'A message to the user',
  type = 'info',
}: MessageProps) => {
  // Setup our classList
  const classList = ['ks-message', type && `ks-message--type-${type}`]
    .join(' ')
    .trim();

  return (
    <div className={classList}>
      {header && <div className="ks-message__header">{header}</div>}

      {children && <div className="ks-message__inner">{children}</div>}

      {footer && <div className="ks-message__footer">{footer}</div>}
    </div>
  );
};

export default Message;
