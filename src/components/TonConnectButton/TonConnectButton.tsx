import { TonConnectButton as TonConnectButtonLib } from '@tonconnect/ui-react';
import styles from './TonConnectButton.module.scss';

const TonConnectButton = () => (
  <div className={styles.buttonWrapper}>
    <TonConnectButtonLib className={styles.button} />
  </div>
);

export default TonConnectButton;
