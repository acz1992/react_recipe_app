import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
	return (
		<List>
			<NavLink to={"/cuisine/italian"}>
				<FaPizzaSlice />
				<h4>Italian</h4>
			</NavLink>
			<NavLink>
				<FaHamburger to={"/cuisine/american"} />
				<h4>American</h4>
			</NavLink>
			<NavLink>
				<GiNoodles to={"/cuisine/thai"} />
				<h4>Thai</h4>
			</NavLink>
			<NavLink>
				<GiChopsticks to={"/cuisine/japanese"} />
				<h4>Japanese</h4>
			</NavLink>
		</List>
	);
}

const List = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem 0rem;
`;

export default Category;
