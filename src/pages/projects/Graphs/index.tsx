import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TransitionEffect from "../../../../components/TransitionEffect";
import Head from "next/head";
import { createStateMoney } from "../../../../store/actions/manager-of-money.actions";
import DataForm from "../../../../components/components-for-managerOfMoney/DataForm";
import IllustrationData from "../../../../components/components-for-managerOfMoney/IllustrationData";



const ManagerOfMoney = () => {
    const data: managerOfMoneyState = useSelector((state: Root) => state.managerOfMoney as managerOfMoneyState )
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(createStateMoney());
        }, [dispatch]);
        
    return (
        <>
            <Head>
            <title>Graphs</title>
            </Head>
            <TransitionEffect />

            <main className="h-screen w-full flex justify-center items-center flex-col">
            <h1 className="font-bold mb-5 text-base lg:text-2xl">How much money are you saving?</h1>
                {data.isCompleate ? <IllustrationData /> : <DataForm />}
            </main>
        </>

    );
};

export default ManagerOfMoney;