export function referralCompletedPoints() {
    const referralPoints = computed(() => {
        let total = 0;
        const referrals = useAuth().value.referrals;

        if (!referrals || referrals?.length <= 0) return total;
        
        for(const item of referrals){
            if (!item.pointsClaimed) total = total + 200;
        }
        return total;
    })
    return {
        referralPoints
    }
}

  