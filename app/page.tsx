import CalculateForm from "@/components/SalaryCalculator/CalculateForm";
import SalarySummary from "@/components/SalaryCalculator/SalarySummary";

export default function Home() {
  return (
    <div className=" md:flex justify-between m-20 m">
      <CalculateForm />
      <SalarySummary />
    </div>
  );
}
