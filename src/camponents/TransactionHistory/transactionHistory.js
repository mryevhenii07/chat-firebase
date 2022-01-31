import styles from "./TransactionHistory.module.css";

export default function TransactionHistory(data) {
  console.log(data.items);
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.titleTh}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {data.items.map((item) => (
        <thead key={item.id}>
          <tr className={styles.subTitleTh}>
            <th>{item.type}</th>
            <th>{item.amount}</th>
            <th>{item.currency}</th>
          </tr>
        </thead>
      ))}
    </table>
  );
}
// "homepage": "https://kateryna-borysenko.github.io/имя_репозитория“,
