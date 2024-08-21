import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggenIn = { firstName: "Shiwali", lastName: 'Karn', email:'shishiwali@gmail.com' };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggenIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1259.35}
          />
        </header>
        RecentTransactions
      </div>
      <RightSidebar
      user={loggenIn}
      transactions={[]}
      banks={[{currentBalance: 123.50}, {currentBalance:500.50}]}
      />
    </section>
  )
}

export default Home