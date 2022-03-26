for(mi=0;mi<match_result.length;mi++)
{
	for(j=0;j<players;j++)
	{
		if(match_result[mi] == picks[j].pick[mi])
		{
			if(mi<r1_end)
				player_score[j]++;
			else if(mi>=r1_end && mi<r2_end)
				player_score[j] = player_score[j]+2;
			else if(mi>=r2_end && mi<r3_end)
				player_score[j] = player_score[j]+3;
		}
		/*else if(match_result[mi] == 11)
		{
			if(mi<r1_end)
				player_score[j] = player_score[j] + 0.5;
			else
				player_score[j]++;
		}*/
		player_list_ranks[j] = player_list[j];
		player_score_ranks[j] = player_score[j];
		player_ranks_ranks[j] = 0;
		player_ranks[j] = 0;
	}
	sort_value(player_list_ranks, 0, players-1, player_score_ranks);
	for(j=0;j<players;j++)
	{
		if(j!=0 && player_score_ranks[j] == player_score_ranks[j-1])
			player_ranks_ranks[j] = player_ranks_ranks[j-1];
		else
			player_ranks_ranks[j] = j+1;
	}
	for(j=0;j<players;j++)
		for(k=0;k<players;k++)
			if(player_list[j] == player_list_ranks[k])
				player_ranks[j] = player_ranks_ranks[k];
	for(j=0;j<players;j++)
	{
		past_score[mi].val[j] = player_score[j];
		past_rank[mi].val[j] = player_ranks[j];
	}				
}
//alert("1");
/*for(j=0;j<players;j++)
{
	for(i=0;i<4;i++)
		if(semi_result[i] == picks[j].pick[r3_end+i])
			player_score[j] = player_score[j]+4;
		else if(semi_result[0] == picks[j].pick[r3_end+i] || semi_result[1] == picks[j].pick[r3_end+i] || semi_result[2] == picks[j].pick[r3_end+i] || semi_result[3] == picks[j].pick[r3_end+i])
			player_score[j] = player_score[j]+3;
	for(;i<6;i++)
		if(semi_result[4] == picks[j].pick[r3_end+i] || semi_result[5] == picks[j].pick[r3_end+i])
			player_score[j] = player_score[j]+5;
	if(semi_result[6] == picks[j].pick[62])
		player_score[j] = player_score[j]+7;
}*/
for(j=0;j<players;j++)
{
	player_list_ranks[j] = player_list[j];
	player_score_ranks[j] = player_score[j];
	player_ranks_ranks[j] = 0;
	player_ranks[j] = 0;
	score_prad1[j] = player_score[j];
	score_prad2[j] = player_score[j];
}

sort_value(player_list_ranks, 0, players-1, player_score_ranks);
for(j=0;j<players;j++)
{
	if(j!=0 && player_score_ranks[j] == player_score_ranks[j-1])
		player_ranks_ranks[j] = player_ranks_ranks[j-1];
	else
		player_ranks_ranks[j] = j+1;
}
for(j=0;j<players;j++)
	for(k=0;k<players;k++)
		if(player_list[j] == player_list_ranks[k])
			player_ranks[j] = player_ranks_ranks[k];
