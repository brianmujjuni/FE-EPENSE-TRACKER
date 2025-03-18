import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useUserAuth } from "../../hooks/userUserAuth";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { useNavigate } from "react-router-dom";
import { IoMdCard } from "react-icons/io";
import InfoCard from "../../components/Cards/InfoCard";
import { LuHandCoins,LuWalletMinimal } from "react-icons/lu";
import { addThousandsSeperator } from "../../utils/helpers";
export default function () {
  useUserAuth();
  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `${API_PATHS.DASHBOARD.GET_DATA}`
      );
      if (response.data) {
        setDashboardData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    return () => {};
  }, []);
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            icon={<IoMdCard />}
            label="Total Balance"
            value={addThousandsSeperator(dashboardData?.totalBalance || 0)}
            color="bg-primary"
          />
          <InfoCard
            icon={<IoMdCard />}
            label="Total Income"
            value={addThousandsSeperator(dashboardData?.totalBalance || 0)}
            color="bg-orange-500"
          />
          <InfoCard
            icon={<IoMdCard />}
            label="Total Expense"
            value={addThousandsSeperator(dashboardData?.totalBalance || 0)}
            color="bg-red-500"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
