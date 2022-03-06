function withTooltip(Component) {
  return class withTooltip extends Component {
    state = { showTooltip: false };

    mouseOver = () => this.setState({ showTooltip: true });
    mouseOut = () => this.setState({ showTooltip: false });

    render() {
      return (
        <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}>
          <Component {...this.props} showTooltip={this.state.showTooltip} />
        </div>
      );
    }
  };
}
export default withTooltip;
