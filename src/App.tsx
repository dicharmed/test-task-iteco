import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TransportPage } from "./pages/transport-page/transport-page";
import { ConfigProvider } from "antd";
import ru from "antd/locale/ru_RU";
import "dayjs/locale/ru.js";
import dayjs from "dayjs";
dayjs.locale("ru");

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={ru}>
        <TransportPage />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
