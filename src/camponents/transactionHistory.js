export default function TransactionHistory(data) {
  console.log(data.items);
  return (
    <table className="transaction-history">
      <thead>
        <tr className="title-th">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {data.items.map((item) => (
        <thead key={item.id}>
          <tr className="sub__title-th">
            <th>{item.type}</th>
            <th>{item.amount}</th>
            <th>{item.currency}</th>
          </tr>
        </thead>
      ))}
    </table>
  );
}
