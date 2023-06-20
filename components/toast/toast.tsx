import styles from "./toast.module.css";

type Props = {
  isSuccess: boolean;
};

export function Toast({ isSuccess }: Props) {
  return (
    <p
      className={
        isSuccess
          ? `${styles.toast} ${styles.show} ${styles.message}`
          : styles.toast
      }
    >
      Sent
    </p>
  );
}
