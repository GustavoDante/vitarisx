import { StepEmptyIcon } from "@/assets/icons/stepEmpty";
import { StepPendingIcon } from "@/assets/icons/stepPending";
import { StepSuccessIcon } from "@/assets/icons/stepSuccess";

export const steps = [
    {
        name: 'Escolha o Profissional',
        status: "Escolhido",
        icon: StepSuccessIcon,
    },
    {
        name: 'Agende um Horário',
        status: "Escolhendo",
        color: "bg-blue-700",
        icon: StepPendingIcon,
    },
    {
        name: 'Realize o Pagamento',
        status: "Pendente",
        color: "bg-gray-300",
        icon: StepEmptyIcon,
    },
]