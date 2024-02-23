import styles from './TransactionHistory.module.css';
import { Payment } from '../Payment/Payment.jsx';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <Payment {...item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};