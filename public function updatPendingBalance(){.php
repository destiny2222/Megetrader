 public function updatPendingBalance(){
        $pendingTransactions = Transactions::where('pending_amount',  'receiver_id')->get();
        $pending = [];
        foreach ($pendingTransactions as $transaction){
            $pending = $transaction;
        }
        return $pending;
     
    }


    